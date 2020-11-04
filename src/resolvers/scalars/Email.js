import {GraphQLScalarType} from "graphql";
import {Kind} from "graphql/language";

const email = value =>
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        .test(value) ? value : null;

const Email = new GraphQLScalarType({
    name: 'Email',
    description: 'Email custom scalar type',
    parseValue: email,
    serialize: email,
    parseLiteral({kind, value}) {
        if (kind === Kind.STRING) return email(value);
        return null;
    }
});
