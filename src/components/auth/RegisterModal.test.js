import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterModal from './RegisterModal';

describe('RegisterModal', () => {
  const mockOnClose = jest.fn();
  const mockOnLoginClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders register modal when isOpen is true', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    expect(screen.getByText('إنشاء حساب')).toBeInTheDocument();
    expect(screen.getByText('انضم إلينا')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('أدخل اسمك الكامل')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('أدخل رقم الواتس اب الخاص بك')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(
      <RegisterModal
        isOpen={false}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    expect(screen.queryByText('إنشاء حساب')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const closeButton = screen.getAllByRole('button')[0]; // First button is close
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onLoginClick when login link is clicked', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const loginLink = screen.getByText('سجل الدخول');
    fireEvent.click(loginLink);

    expect(mockOnLoginClick).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1); // Should also close the modal
  });

  test('shows verification screen when submit button is clicked', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    expect(screen.getByText('تم ارسال كود التفعيل بنجاح')).toBeInTheDocument();
    expect(screen.getByText('رمز التحقق المرسل الى الجوال')).toBeInTheDocument();
  });

  test('handles verification code input', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    // Switch to verification screen
    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    const codeInputs = screen.getAllByRole('textbox');
    expect(codeInputs).toHaveLength(6);

    // Test input in first field
    fireEvent.change(codeInputs[0], { target: { value: '1' } });
    expect(codeInputs[0]).toHaveValue('1');

    // Test auto-focus to next input
    fireEvent.change(codeInputs[0], { target: { value: '1' } });
    expect(codeInputs[1]).toHaveFocus();
  });

  test('handles countdown timer', async () => {
    jest.useFakeTimers();

    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    // Switch to verification screen
    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    expect(screen.getByText('انتظار 45 ثانية')).toBeInTheDocument();

    // Fast-forward time
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      expect(screen.getByText('انتظار 44 ثانية')).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  test('shows resend button after countdown', async () => {
    jest.useFakeTimers();

    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    // Switch to verification screen
    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    // Fast-forward to end of countdown
    jest.advanceTimersByTime(45000);
    await waitFor(() => {
      expect(screen.getByText('إعادة الإرسال')).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  test('handles form input changes', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const nameInput = screen.getByPlaceholderText('أدخل اسمك الكامل');
    const phoneInput = screen.getByPlaceholderText('أدخل رقم الواتس اب الخاص بك');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(phoneInput).toHaveValue('1234567890');
  });

  test('applies correct spacing classes', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const contentDiv = screen.getByText('انضم إلينا').closest('div').parentElement;
    expect(contentDiv).toHaveClass('space-y-3');
  });

  test('renders social login buttons', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    expect(screen.getByText('Continue With Google')).toBeInTheDocument();
    expect(screen.getByText('Continue With facebook')).toBeInTheDocument();
    expect(screen.getByText('Continue With apple')).toBeInTheDocument();
  });

  test('closes modal when clicking login link', () => {
    render(
      <RegisterModal
        isOpen={true}
        onClose={mockOnClose}
        onLoginClick={mockOnLoginClick}
      />
    );

    const loginLink = screen.getByText('سجل الدخول');
    fireEvent.click(loginLink);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockOnLoginClick).toHaveBeenCalledTimes(1);
  });
});
