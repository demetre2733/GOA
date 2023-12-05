names = []
ages = []

while True:
    name = input("სახელი ჩაწერეთ ამ გრაფაში (თუ უკვ შეიყვანეთ ყველა ოჯახის წევრის სახელი და ასაკი გთხოვთ დაწერეთ 'done' და დააჭირეთ 'Enter'-ს): ")
    if name.lower() == 'done':
        break
    age = float(input(f"შეიყვანე ასაკი {name}: "))
    
    names.append(name)
    ages.append(age)

for i in range(len(names)):
    print(f"სახელი: {names[i]}, ასაკი: {ages[i]}")