import { Pwm } from './pwm';
import { GPIO } from './gpio';
import readline from 'readline';

const sysRl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readLine(ques: string): Promise<string> {
  return new Promise<string>((resolve) => {
    sysRl.question(ques, (answer) => {
      resolve(answer);
    });
  });
}

const iPwm = new Pwm();

iPwm.WiringPiInit();
iPwm.PWMInit(GPIO.GPIO0, 0, 200);
iPwm.PWMInit(GPIO.GPIO2, 0, 200);
iPwm.PWMInit(GPIO.GPIO3, 0, 200);
iPwm.PWMInit(GPIO.GPIO7, 0, 200);

async function main() {
  let curGPIO = null;
  while (true) {
    const input = (await readLine(`${curGPIO === null ? '' : `[${curGPIO}]`}>> `)).trim().toLowerCase();
    if (input !== 'exit') {
      if (input.startsWith('select')) {
        const num = Number(input.split(/\s+/)[1]);
        if (isFinite(num)) {
          curGPIO = Math.floor(num);
        }
      } else {
        const num = Number(input);
        if (isFinite(num) && curGPIO !== null) {
          let value = Math.floor(num) + 10;
          if (value < 10 || value > 20) {
            value = 10;
          }
          iPwm.PWMSet(curGPIO, value);
        }
      }
    } else {
      break;
    }
  }
  sysRl.close();
  iPwm.PWMSet(GPIO.GPIO0, 0);
  iPwm.PWMSet(GPIO.GPIO2, 0);
  iPwm.PWMSet(GPIO.GPIO3, 0);
  iPwm.PWMSet(GPIO.GPIO7, 0);
  process.exit(0);
}

main();
