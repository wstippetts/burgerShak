import BaseController from "../utils/BaseController.js";
import { burgersService } from "../services/BurgersService.js";
export class BurgersController extends BaseController {

  constructor() {
    super('api/burgers')

    this.router
      .get('/burgers', this.getBurgers)
      .post('/burgers', this.makeBurger)
      .put('/burgers/:burgerId', this.changeBurger)
      .delete('/burgers/:burgerId', this.deleteBurger)
  }

  getBurgers(req, res, next) {
    try {
      let burgers = burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)

    }
  }

  makeBurger(req, res, next) {
    try {
      let rawBurger = req.body
      let newBurger = burgersService.makeBurger(rawBurger)
      res.send(newBurger)
    } catch (error) {
      next(error)

    }
  }

  changeBurger(req, res, next) {
    try {

    } catch (error) {
      next(error)

    }
  }

  deleteBurger(req, res, next) {
    try {

    } catch (error) {
      next(error)

    }
  }

}