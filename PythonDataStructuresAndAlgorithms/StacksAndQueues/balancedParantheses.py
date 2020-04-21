from Stack import Stack


def balanceCheck(string):

    s = Stack()

    for par in string:
        if par in ['(', '{', '[']:
            s.push(par)
        elif par in [')', '}', ']']:
            if par == ')' and s.peek() == '(':
                s.pop()
            elif par == '}' and s.peek() == '{':
                s.pop()
            elif par == ']' and s.peek() == '[':
                s.pop()
            else:
                return False

    if s.size() == 0:
        return True

    return False


if __name__ == "__main__":
    print(balanceCheck('[]'))
    print(balanceCheck('[(){}()][]{'))
