# Work log

## The router

Next, the routes need to be added.  Here is the react-router-dom version 5 code shown:

```js
<Route exact path="/users" component={UsersList} />
<Route exact path="/users/:userId" component={UserPage} />
```

Here is what we need for version 6:

```js
<Route path="/users" element={<UsersList />} />
<Route path="/users/:userId" element={<UserPage />} />
```
