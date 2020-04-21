def cummalativeSum(n):

    if n == 0:
        return 0

    return n + cummalativeSum(n-1)


if __name__ == "__main__":
    print(cummalativeSum(4))
