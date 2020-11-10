import {CMiddleware, Controller, Use} from 'decopress';

import V1Controller from "./v1";

@CMiddleware()
@Controller('/')
class APIController {
    @Use()
    V1Controller() {
        return new V1Controller();
    }
}

export default APIController;
