import {test, expect} from '@playwright/test'

test('API DELETE Request', async({request}) => {

    const response = await request.delete('https://reqres.in/api/users/2')
    console.log("Hello")
    expect(response.status()).toBe(204)

})

test('API POST Request', async({request}) => {

    const response = await request.post('https://reqres.in/api/users',{
        data:{
                "name": "Laila",
                "job": "SQA Engineer"
            }
        
    })

    expect(response.status()).toBe(201)

    const text = await response.text();

    expect(text).toContain('Laila')

    console.log(await response.json())
})

test('API PUT Request', async({request}) => {

    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
                "name": "Laila",
                "job": "SQA Engineer"
            }
        
    })

    expect(response.status()).toBe(200)

    const text = await response.text();

    expect(text).toContain('Laila')

    console.log(await response.json())
})

test('API GET Request', async({request}) => {

    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)

    const text = await response.text();

    expect(text).toContain('janet')

    console.log(await response.json())
})