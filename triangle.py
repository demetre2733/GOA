def triangle(side1, side2, side3):
    if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")
side1 = float(input("შეიყვანეთ პირველი გვერდის სიგრძე: "))
side2 = float(input("შეიყვანეთ მეორე გვერდის სიგრძე: "))
side3 = float(input("შეიყვანეთ მესამე გვერდის სიგრძე: "))
triangle(side1, side2, side3)

triangle(3, 4, 5)
triangle(1, 1, 3)