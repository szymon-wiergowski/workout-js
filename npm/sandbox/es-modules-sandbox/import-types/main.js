{
    // named imports
    import { NamedFoo, MAX_HEALTH, gameMap, NamedFooArrow } from './named-imports';
    const fooInstance = new NamedFoo();
}

{
    // named aliases imports
    import { NamedFoo } from './another-imports';
    import { NamedFoo as NamedFooFromNamedImports } from './named-imports';

    const fooInstance = new NamedFooFromNamedImports();
}

{
    // bulk aliases imports
    import * as namedModule from './named-imports';

    new namedModule.NamedFoo();
    namedModule.MAX_HEALTH;
}

{
    // default exports
    import NamedComponent, { MAX_HEALTH, NamedFoo } from './default-export';

    new NamedComponent();
}

{
    import anotherDefaultExport from './another-default-export';
    anotherDefaultExport();
}