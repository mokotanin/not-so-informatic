def factorielle_recursive(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorielle_recursive(n - 1)

for n in [2, 10, 20, 50]:
    print(n, "! =", factorielle_recursive(n))
