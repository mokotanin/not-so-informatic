import matplotlib.pyplot as plt

def f(x):
    return 27 * x**3 - 27 * x**2 - 18 * x + 8

for x in [0, 0.5, 0.25, 0.375, 1, 2]:
    print("f(", x, ") =", f(x))

X = []
Y = []
x = -1
while x <= 2:
    X.append(x)
    Y.append(f(x))
    x = x + 0.1

plt.plot(X, Y)
plt.show()
