class MockTest {
    init {
        Given(promptMessage) {
            When (userInput(direction, num, word) {
                And(check((direction === "L " || "R")) && check((typeof num === "number")) && check((word.length > 0))) {
                    Then(move(directon, num, word.split("")))
                }
                And(!check(directon === "L " || "R")) {
                    Then(Error("wrong direction"))
                }
                And(!check(typeof num === "number")) {
                    Then(Error("wrong number"))
                }
                And(!check(word.length > 0)) {
                    Then(Error("wrong word"))
                }
            }
        }
    }
}

