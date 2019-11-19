import projectNameGenerator from 'project-name-generator';


export const generateMultipleNames = (words) => {
    return projectNameGenerator({ words }).spaced;
}

export const generateName = () => {
    return generateMultipleNames(1);
}

export const generateNameRaw = () => {
    return projectNameGenerator({ words: 2}).raw;
}