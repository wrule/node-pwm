// 驱动四轴PWM的调试控制台
#include <stdio.h>
#include <errno.h>
#include <string.h>
// #include <wiringPi.h>
// #include <softPwm.h>

// 初始化wiringPi
void WiringPiInit() {
  // wiringPiSetup();
  printf("WiringPiInit\n");
}

// 初始化某一GPIO上的PWM功能
void PWMInit(int gpio, int min, int max) {
  // softPwmCreate(gpio, min, max);
  printf("PWMInit %d %d %d\n", gpio, min, max);
}

// 设置某一GPIO上的PWM
void PWMSet(int gpio, int value) {
  // softPwmWrite(gpio, value);
  printf("PWMSet %d %d\n", gpio, value);
}
