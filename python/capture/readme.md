## 相关包
```
python -m pip install grpcio
python -m pip install grpcio-tools
pip install --upgrade Pillow
pip install pyinstaller
```

## 执行命令

```
python -m grpc_tools.protoc -I./ --python_out=. --pyi_out=. --grpc_python_out=. ./capture.proto
```
```
pyinstaller --onefile capture.py
```

## 文档
- https://grpc.io/docs/languages/python/quickstart/