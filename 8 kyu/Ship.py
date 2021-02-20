# Ship.py

class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def isWorthIt(self):
        if ((self.crew * 1.5) + self.draft) > 20:
            return True


titanic = Ship(15, 10)

print(titanic.isWorthIt())
