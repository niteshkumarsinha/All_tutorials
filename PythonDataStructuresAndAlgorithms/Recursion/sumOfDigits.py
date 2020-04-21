def sumOfDigits(n):

    if n / 10 < 1:
        return n

    return (n % 10) + sumOfDigits(n/10)


if __name__ == "__main__":
    print(sumOfDigits(1234))
