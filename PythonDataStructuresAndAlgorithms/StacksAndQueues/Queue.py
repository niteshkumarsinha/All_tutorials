class Queue:

    def __init__(self):
        self.items = []
        self.length = 0

    def enqueue(self, item):
        self.items.append(item)
        self.length += 1

    def dequeue(self):
        if self.length > 0:
            self.items.pop(0)
            self.length -= 1

    def isEmpty(self):
        return self.length == 0

    def size(self):
        return self.length
