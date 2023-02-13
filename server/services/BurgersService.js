import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { fakedb } from "../db/fakedb.js"

class BurgersService {
  getBurgers() {
    return fakedb.burgers
  }

  makeBurger(rawBurger) {
    if (!rawBurger.name && !rawBurger.toppings) {
      throw new BadRequest("thats not a real burger")
    }
    fakedb.burgers.push(rawBurger)
    return rawBurger
  }

}

export const burgersService = new BurgersService()