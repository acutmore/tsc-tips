# tsc-tips
Tips when using typescript

1.8 and 2.1 compatible tips in seperate folders

### Setup

    npm install
    
### Use

1. Start watching the files

    npm run watch-1.8

or

    npm run watch-2.1

2. Then when the files are modified the compiler will run and print any errors it finds

3. Now uncomment code where instructed and see the errors that are caught by the compiler


### Tip summary

Donts:
* Type asserts: `return <T>{}`
* Protected class properties: `protected x`
* Adding default parameters of the same type: `x = true, y = true`
* Function.bind: `foo.bind(undefined, 1)`

Dos:
* Use Enums instead of booleans: `enum Log { YES, NO, MAYBE }`
* Create types where types are important: `arr is NonEmptyArray`
