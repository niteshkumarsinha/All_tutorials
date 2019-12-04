# class based solution
class Anagram:

    count = dict()

    def __init__(self, string1, string2):
        self.string1 = string1
        self.string2 = string2

    def count_letters_of_string1(self):
        for string in self.string1:
            if string in Anagram.count:
                Anagram.count[string] += 1
            else:
                Anagram.count[string] = 1

    def count_letters_of_string2(self):
        for string in self.string2:
            if string in Anagram.count:
                Anagram.count[string] -= 1

    def check_anagram(self):
        self.count_letters_of_string1()
        self.count_letters_of_string2()

        for key in Anagram.count:
            if Anagram.count[key] != 0 and key != ' ':
                return False

        return True

# function based


def check_anagram(string1, string2):

    count = dict()

    for string in string1:
        if string in count and string != ' ':
            count[string] += 1
        elif string != ' ':
            count[string] = 1

    for string in string2:
        if string == ' ':
            continue
        if string in count and count[string] > 0:
            count[string] -= 1
        else:
            return False

    for key in count:
        if count[key] > 0:
            return False

    return True


if __name__ == '__main__':
    # anagram = Anagram("public relations", "crap built on lies")
    # print(anagram.check_anagram())
    # print(anagram.count)
    print(check_anagram("clint eastwood", "old west action"))
    