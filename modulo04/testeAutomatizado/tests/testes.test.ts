import {User} from '../src/UserInterface'
import {performPurchase} from '../src/index'

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Maria Fernanda",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Maria Fernanda",
		balance: 60
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Maria Fernanda",
		balance: 40
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Maria Fernanda",
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Maria Fernanda",
		balance: 30
	}

	const result = performPurchase(user, 40)
	
	expect(result).toBe(undefined)
})