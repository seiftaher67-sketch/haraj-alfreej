import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginModal from './LoginModal';

describe('LoginModal', () => {
  const mockOnClose = jest.fn();
  const mockOnRegisterClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login modal when isOpen is true', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    expect(screen.getByText('تسجيل الدخول')).toBeInTheDocument();
    expect(screen.getByText('مرحبا بك')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('أدخل رقم الواتس اب الخاص بك')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(
      <LoginModal
        isOpen={false}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    expect(screen.queryByText('تسجيل الدخول')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    const closeButton = screen.getAllByRole('button')[0]; // First button is close
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onRegisterClick when register link is clicked', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    const registerLink = screen.getByText('سجل الآن');
    fireEvent.click(registerLink);

    expect(mockOnRegisterClick).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1); // Should also close the modal
  });

  test('shows verification screen when submit button is clicked', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    expect(screen.getByText('تم ارسال كود التفعيل بنجاح')).toBeInTheDocument();
    expect(screen.getByText('قم بادخال رمز التحقق المرسل الى الجوال')).toBeInTheDocument();
  });

  test('handles verification code input', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
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
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
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
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
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

  test('handles backspace in verification code input', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    // Switch to verification screen
    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    const codeInputs = screen.getAllByRole('textbox');

    // Fill first input and move to second
    fireEvent.change(codeInputs[0], { target: { value: '1' } });
    fireEvent.change(codeInputs[1], { target: { value: '2' } });

    // Press backspace on second input when empty - should move to first
    fireEvent.keyDown(codeInputs[1], { key: 'Backspace' });
    expect(codeInputs[0]).toHaveFocus();
  });

  test('handles paste in verification code input', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    // Switch to verification screen
    const submitButton = screen.getByText('إرسال رمز التحقق');
    fireEvent.click(submitButton);

    const codeInputs = screen.getAllByRole('textbox');

    // Paste code
    fireEvent.paste(codeInputs[0], {
      clipboardData: { getData: () => '123456' }
    });

    expect(codeInputs[0]).toHaveValue('1');
    expect(codeInputs[1]).toHaveValue('2');
    expect(codeInputs[2]).toHaveValue('3');
    expect(codeInputs[3]).toHaveValue('4');
    expect(codeInputs[4]).toHaveValue('5');
    expect(codeInputs[5]).toHaveValue('6');
  });

  test('applies correct spacing classes', () => {
    render(
      <LoginModal
        isOpen={true}
        onClose={mockOnClose}
        onRegisterClick={mockOnRegisterClick}
      />
    );

    const contentDiv = screen.getByText('مرحبا بك').closest('div').parentElement;
    expect(contentDiv).toHaveClass('space-y-3');
  });
});
