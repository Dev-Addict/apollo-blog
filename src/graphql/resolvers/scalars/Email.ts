import {GraphQLScalarType} from "graphql";
import {Kind} from "graphql/language";

const email = (value: string) =>
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        .test(value) ? value : null;

const Email = new GraphQLScalarType({
    name: 'Email',
    description: 'Email custom scalar type',
    parseValue: email,
    serialize: email,
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) return email(ast.value);
        return null;
    }
});

export default Email;
