import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-input.html',
  styleUrl: './otp-input.css',
})
export class OtpInput implements AfterViewInit{
  readonly OTP_LENGTH = 5;
  otpDigits: string[] = new Array(this.OTP_LENGTH).fill('');
  submitted = false;
  isValid = false;
  @ViewChildren('otpInput') inputs!: QueryList<ElementRef>;
  ngAfterViewInit() {
    // Focus on the first input (index 0)
    const firstInput = this.inputs.first.nativeElement;
    firstInput?.focus();
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    // 1. Strip non-numbers immediately
    let value = input.value.replace(/\D/g, ''); // Allow only digits
    console.log(value);
    // 2. Handle Paste (take only the first char if multiple are pasted)
    if (value.length > 1) {
      value = value.charAt(0);
    }
    // 3. Force the input value to match the sanitized value (removes letters visually)
    input.value = value;
    this.otpDigits[index] = value;
    // 4. Move focus to next input if we have a value
    if (value && index < this.OTP_LENGTH - 1) {
      const nextInput = this.inputs.toArray()[index + 1].nativeElement;
      nextInput?.focus();
    }
  }

  onkeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {
        const prevInput = this.inputs.toArray()[index - 1].nativeElement;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  }
}

