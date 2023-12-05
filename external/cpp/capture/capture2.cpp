// hello.cc using Node-API
#include <node_api.h>
#include <iostream>
#include <CoreGraphics/CoreGraphics.h>
#include <ImageIO/ImageIO.h>  
#include <CoreServices/CoreServices.h>

namespace demo {

void captureScreen(CGRect captureRect, const char* filePath) {
    CGImageRef screenShot = CGWindowListCreateImage(captureRect, kCGWindowListOptionOnScreenOnly, kCGNullWindowID, kCGWindowImageDefault);
    CFURLRef url = CFURLCreateFromFileSystemRepresentation(kCFAllocatorDefault, (const UInt8*)filePath, strlen(filePath), false);
    CGImageDestinationRef destination = CGImageDestinationCreateWithURL(url, kUTTypePNG, 1, NULL);
    CGImageDestinationAddImage(destination, screenShot, nil);
    CGImageDestinationFinalize(destination);
    CFRelease(destination);
    CFRelease(url);
    CGImageRelease(screenShot);
}

napi_value Method(napi_env env, napi_callback_info args) {
  napi_value greeting;
  napi_status status;

//   CGRect captureRect = CGRectMake(0, 0, 800, 600);  // 设置截取的区域，这里是整个屏幕的左上角 800x600 区域
//   const char* filePath = "screenshot.png";  // 设置保存截图的文件路径

//     captureScreen(captureRect, filePath);

//     std::cout << "截图已保存至：" << filePath << std::endl;

  status = napi_create_string_utf8(env, "world", NAPI_AUTO_LENGTH, &greeting);
  if (status != napi_ok) return nullptr;
  return greeting;
}

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value fn;

  status = napi_create_function(env, nullptr, 0, Method, nullptr, &fn);
  if (status != napi_ok) return nullptr;

  status = napi_set_named_property(env, exports, "hello", fn);
  if (status != napi_ok) return nullptr;
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo