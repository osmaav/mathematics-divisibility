#!/usr/bin/env zsh

# =============================================================================
# add-path-comments.zsh
# Добавляет комментарий с относительным путём в начало *.tsx файлов
# Формат: //@/components/ui/Button.tsx
# Запуск: из корневой директории проекта
# =============================================================================

setopt EXTENDED_GLOB

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Исключаемые директории (можно расширить)
EXCLUDE_DIRS=(
  "node_modules"
  ".next"
  "dist"
  "build"
  ".git"
  "coverage"
)

# Формируем строку для исключения через -path
exclude_args=()
for dir in "${EXCLUDE_DIRS[@]}"; do
  exclude_args+=(-path "*/${dir}/*" -prune -o)
done

echo -e "${GREEN}🔍 Поиск *.tsx файлов в проекте...${NC}"

# Находим все .tsx файлы, исключая указанные директории
find . ${exclude_args:+"${exclude_args[@]}"} \
  -type f -name "*.tsx" ! -name "*.d.ts" -print0 | \
while IFS= read -r -d '' file; do
  
  # Получаем относительный путь без "./" в начале
  rel_path="${file#./}"
  
  # Формируем целевой комментарий
  comment="//@/${rel_path}"
  
  # Проверяем, есть ли уже такой комментарий в первых 5 строках файла
  # (учитываем возможные shebang, пустые строки, другие комментарии)
  if head -n 5 "$file" 2>/dev/null | grep -qF "$comment"; then
    echo -e "${YELLOW}⊘ Пропущено:${NC} $rel_path (уже есть комментарий)"
    continue
  fi
  
  # Проверяем, не начинается ли файл уже с похожего комментария //@/
  # чтобы избежать дублирования формата
  first_comment=$(head -n 1 "$file" 2>/dev/null | grep -oE '^//\s*@/[^ ]+' || true)
  if [[ -n "$first_comment" ]]; then
    echo -e "${YELLOW}⊘ Пропущено:${NC} $rel_path (уже есть //@/ комментарий: $first_comment)"
    continue
  fi
  
  # Создаём временный файл
  tmp_file=$(mktemp)
  
  # Записываем комментарий первой строкой, затем содержимое оригинала
  {
    echo "$comment"
    cat "$file"
  } > "$tmp_file"
  
  # Атомарно заменяем оригинал
  mv "$tmp_file" "$file"
  
  echo -e "${GREEN}✓ Добавлено:${NC} $rel_path"
  
done

echo -e "${GREEN}✅ Готово!${NC}"
