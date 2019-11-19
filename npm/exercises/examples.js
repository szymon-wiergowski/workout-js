// let & const
{
    {
        let foo = 5;
        // let foo = 10;
    }

    // console.log(foo);

    {
        // let foo = foo + 10; // nie zadziała!
        let foo = 10;
        console.log(foo);

        foo++;
        foo = 'nanana' + foo;

        console.log(foo);
    }

    // const
    {
        const someValue = '5';
        // someValue = '5'; // nie zadziała

        console.log(someValue)
    }

    // const array
    {
        const someArray = [1, 2, 3];

        someArray.push(4);

        console.log(someArray)
    }

    // const object
    {
        const someObject = {
            name: 'Andrzej'
        };

        someObject.name = 'Maria';

        console.log('someObject: ', someObject);
    }
}