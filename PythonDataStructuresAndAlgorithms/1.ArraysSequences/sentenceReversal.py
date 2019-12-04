def sentenceReversal(sentence):

    parsed_sentence = sentence.strip()
    parsed_sentence_words = parsed_sentence.split()

    i = len(parsed_sentence_words) - 1

    sentence = ''
    while i >= 0:
        sentence += parsed_sentence_words[i]  + ' '
        i-=1
    return sentence.strip()



def rev_word(s):

    words = []
    length = len(s)
    spaces = [' ']

    i = 0 

    while i < length:
        if s[i] not in spaces:
            word_start = i

            while i < length and s[i] not in spaces:
                i+=1

            words.append(s[word_start:i])

        i+=1

    return " ".join(reversed(words))


if __name__ == '__main__':
    print(sentenceReversal("Hello John how are you"))



