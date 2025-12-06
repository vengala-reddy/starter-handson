import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, defer, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  private readonly fb = inject(FormBuilder);
  protected isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  password!: string;
  loginForm = this.fb.group({
    userName: ['reddy'],
    password: ['']
  })
  // calculationResult$ = defer()
  // cdr = inject(ChangeDetectorRef)

  // Step 1: Create a signal for search term
  private searchTerm = signal('');

  // Step 2: Convert signal to observable and apply RxJS operators
  searchResults = toSignal(
    toObservable(this.searchTerm).pipe(
      debounceTime(300),           // Wait 300ms after user stops typing
      distinctUntilChanged(),      // Only emit if value changed
      switchMap(term => {
        if (!term.trim()) {
          return of([]);           // Return empty array for empty search
        }
        // Replace this mock with actual API call
        // return this.api.search(term);
        return of([`Result for: ${term}`]); // Mock implementation
      })
    ),
    { initialValue: [] }
  );

  // Step 3: Method to update search term
  updateSearch(term: string) {
    this.searchTerm.set(term);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    this.userName = this.loginForm.value.userName as any;
    this.password = this.loginForm.value.password as any;
    if (this.userName === "admin" && this.password === "admin") {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}
