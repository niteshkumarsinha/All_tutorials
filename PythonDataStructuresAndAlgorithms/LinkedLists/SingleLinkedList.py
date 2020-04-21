class Node:

    def __init__(self, value):
        self.value = value
        self.nextNode = None


class SingleLinkedList:

    def __init__(self):
        self.head = None

    def push(self, element):
        node = Node(element)
        node.nextNode = self.head
        self.head = node


if __name__ == "__main__":
    L = SingleLinkedList()
    L.push(10)
    L.push('Nitesh')
