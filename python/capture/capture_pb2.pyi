from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class CaptureRequest(_message.Message):
    __slots__ = ["x", "y", "width", "height", "target"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    x: str
    y: str
    width: str
    height: str
    target: str
    def __init__(self, x: _Optional[str] = ..., y: _Optional[str] = ..., width: _Optional[str] = ..., height: _Optional[str] = ..., target: _Optional[str] = ...) -> None: ...

class CaptureReply(_message.Message):
    __slots__ = ["x", "y", "width", "height"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    x: str
    y: str
    width: str
    height: str
    def __init__(self, x: _Optional[str] = ..., y: _Optional[str] = ..., width: _Optional[str] = ..., height: _Optional[str] = ...) -> None: ...

class HelloRequest(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class HelloReply(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...
