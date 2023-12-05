#include <iostream>
#include <CoreGraphics/CoreGraphics.h>
#include <ImageIO/ImageIO.h>  
#include <CoreServices/CoreServices.h>
#include <cstdlib>

void captureScreen(CGDirectDisplayID displayID, CGRect captureRect) {
    CGImageRef screenshot = CGDisplayCreateImageForRect(displayID, captureRect);
    if (screenshot) {
        CFURLRef desktopURL = CFURLCreateWithFileSystemPath(NULL, CFSTR("screenshot.png"), kCFURLPOSIXPathStyle, false);
        CGImageDestinationRef destination = CGImageDestinationCreateWithURL(desktopURL, kUTTypePNG, 1, NULL);
        CGImageDestinationAddImage(destination, screenshot, NULL);
        CGImageDestinationFinalize(destination);
        
        CFRelease(destination);
        CFRelease(desktopURL);
        CGImageRelease(screenshot);
        
        std::cout << "Screenshot captured and saved to the desktop." << std::endl;
    } else {
        std::cout << "Failed to capture screenshot." << std::endl;
    }
}

int main(int argc, char* argv[]) {
    // 获取屏幕数量
    uint32_t screenCount;
    CGGetActiveDisplayList(0, NULL, &screenCount);
    
    // 获取屏幕列表
    CGDirectDisplayID* displays = new CGDirectDisplayID[screenCount];
    CGGetActiveDisplayList(screenCount, displays, &screenCount);
    
    // 打印屏幕信息
    for (uint32_t i = 0; i < screenCount; i++) {
        CGDirectDisplayID displayID = displays[i];
        CGRect screenRect = CGDisplayBounds(displayID);
        std::cout << "Screen " << i << ": " << "x=" << screenRect.origin.x << ", y=" << screenRect.origin.y << ", width=" << screenRect.size.width << ", height=" << screenRect.size.height << std::endl;
    }

    if(argc < 4) {
        std::cout << "argument length must big 4" << std::endl;
        return 0;
    }

    int x = std::stoi(argv[1]);
    int y = std::stoi(argv[2]);
    int width = std::stoi(argv[3]);
    int height = std::stoi(argv[4]);
    int targetScreenIndex = std::stoi(argv[5]);
    std::cout << "argument:" << x << '-' << y << '-' << width << '-' << height << std::endl;
    // 选择目标屏幕和截图区域
    // uint32_t targetScreenIndex;
    // std::cout << "Enter the screen index to capture: ";
    // std::cin >> targetScreenIndex;
    
    // if (targetScreenIndex < screenCount) {
        CGDirectDisplayID targetDisplayID = displays[targetScreenIndex];
        CGRect captureRect = CGDisplayBounds(targetDisplayID);
        
        CGRect rect = CGRectMake(x, y, width, height);
        // 调用截图函数
        captureScreen(displays[targetScreenIndex], rect);
    // } else {
    //     std::cout << "Invalid screen index." << std::endl;
    // }
    
    delete[] displays;
    
    return 0;
}

