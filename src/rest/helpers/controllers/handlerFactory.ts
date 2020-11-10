import {Request, Response} from "express";
import {Document, Model} from "mongoose";

import APIFeatures from "../../utils/APIFeatures";
import catchRequest from "../../utils/catchRequest";

export const GetAll = <T extends Document>(model: Model<T>) =>
    function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = catchRequest(
            async (req: Request, res: Response) => {
                const features =
                    new APIFeatures(model.find(), req.query)
                        .filter()
                        .sort()
                        .limitFields()
                        .paginate();

                const docs = await features.query;

                res.status(200).json({
                    status: 'success',
                    results: docs.length,
                    page: +features.queryString.page || 1,
                    limit: features.queryString.limit * 1 || 20,
                    data: {
                        docs
                    }
                });
            }
        );

        return descriptor;
    };
