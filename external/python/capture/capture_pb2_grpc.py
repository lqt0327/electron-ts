# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import capture_pb2 as capture__pb2


class GreeterStub(object):
    """The greeting service definition.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SayHello = channel.unary_unary(
                '/capture.Greeter/SayHello',
                request_serializer=capture__pb2.HelloRequest.SerializeToString,
                response_deserializer=capture__pb2.HelloReply.FromString,
                )
        self.CaptureDesktop = channel.unary_unary(
                '/capture.Greeter/CaptureDesktop',
                request_serializer=capture__pb2.CaptureRequest.SerializeToString,
                response_deserializer=capture__pb2.CaptureReply.FromString,
                )


class GreeterServicer(object):
    """The greeting service definition.
    """

    def SayHello(self, request, context):
        """Sends a greeting
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CaptureDesktop(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_GreeterServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SayHello': grpc.unary_unary_rpc_method_handler(
                    servicer.SayHello,
                    request_deserializer=capture__pb2.HelloRequest.FromString,
                    response_serializer=capture__pb2.HelloReply.SerializeToString,
            ),
            'CaptureDesktop': grpc.unary_unary_rpc_method_handler(
                    servicer.CaptureDesktop,
                    request_deserializer=capture__pb2.CaptureRequest.FromString,
                    response_serializer=capture__pb2.CaptureReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'capture.Greeter', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Greeter(object):
    """The greeting service definition.
    """

    @staticmethod
    def SayHello(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/capture.Greeter/SayHello',
            capture__pb2.HelloRequest.SerializeToString,
            capture__pb2.HelloReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CaptureDesktop(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/capture.Greeter/CaptureDesktop',
            capture__pb2.CaptureRequest.SerializeToString,
            capture__pb2.CaptureReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)