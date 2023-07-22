
public class StackArray {

    private int[] array;
    private int top;

    public StackArray(int size) {
        array = new int[size];
        top = -1;
    }

    public void push(int value) {
        if (top == array.length - 1) {
            throw new RuntimeException("Stack is full");
        }

        array[++top] = value;
    }

    public int pop() {
        if (top == -1) {
            throw new RuntimeException("Stack is empty");
        }

        return array[top--];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public static void main(String[] args) {
        StackArray stack = new StackArray(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println(stack.pop()); // 3
        System.out.println(stack.pop()); // 2
        System.out.println(stack.pop()); // 1
    }
}
