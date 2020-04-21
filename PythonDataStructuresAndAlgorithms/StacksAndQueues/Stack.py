class Stack:

    def __init__(self):
        self.items = []
        self.length = 0

    def push(self, item):
        self.items.append(item)
        self.length += 1

    def pop(self):
        item = self.items.pop()
        self.length -= 1
        return item

    def peek(self):
        if self.length > 0:
            return self.items[self.length - 1]

    def isEmpty(self):
        return self.length == 0

    def size(self):
        return self.length
