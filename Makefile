libpwm.dylib: ./src/pwm.c
	gcc -dynamiclib ./src/pwm.c -o libpwm.dylib
libpwm.so: ./src/pwm.c
	gcc -shared -o libpwm.so -fPIC ./src/pwm.c -lwiringPi -lpthread
