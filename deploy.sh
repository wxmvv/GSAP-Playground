# 先设置列表 [base,easing,staggers]
# 再将docs/index.html 复制到 docs/base/index.html等
# 如果没有对应文件夹则新建
# 最后将docs文件夹压缩成zip包

# 设置列表
# 从routers.jsx中获取组件列表

list=($(cat src/routers.jsx | grep "path:" | awk -F '"' '{print $2}' | sed 's|^/||' | grep -v "index" | grep -v "404"))
# list=("base" "easing" "staggers")

# 复制文件
for item in ${list[@]}; do
  if [ -d "docs/$item" ]; then
    cp docs/index.html docs/$item/index.html
  else
    mkdir docs/$item
    cp docs/index.html docs/$item/index.html
  fi
done

# 压缩文件
# zip -r docs.zip docs