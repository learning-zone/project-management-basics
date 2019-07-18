## KnockoutJS Notes

#### Q. What is KnockoutJS?

KnockoutJS is a JavaScript library that helps developers create modern, rich user interfaces with a clean underlying data model. Whenever you have a user-interface that needs to update when an underlying data model updates, then KnockoutJS is a useful tool that could be used. Steve Sanderson who works at Microsoft designed KnockoutJS. It is an open source project, and is used to power the front-end of the beautifully designed Azure control interface.

#### Q. How KnockoutJs different from MVC?

|KnockoutJs	                                | MVC                                                                          |
|:------------------------------------------|:-----------------------------------------------------------------------------|  
|KnockoutJs is a MVVM pattern.	            |MVC is a design pattern.                                                      |
|KnockoutJs work like connected mode.	    |MVC work like disconnected mode.                                              |
|Knockout s supported two types of binding. 1.One-way binding 2.Two-way binding. | MVC supported only one-way binding.     |  
|In KnockoutJs, UI part automatically update when your data model update.| In MVC, not update UI automatically when your   data model update. Need event to call data model and update it.                                                           |   
|In KnockoutJs, model part is not directly bind with the view page. Models directly bind with the view-model and view-model directly with the view page.  |  In MVC, model parts directly bind with the view page.                                     |  


#### Q. What Are the main features of KnockoutJs?

1. **Dependency Tracking** – KnockoutJs make dependency between View and ViewModel. Its track the any changes on dependent objects and it is automatically updating the UI (DOM) when your data models are change.
1. **Declarative Binding** – The Declarative Binding provides the ways, your UI (DOM) is connected with your data models in a simply manner using control.
1. **Template Binding** – The Template bindings are used for build sophisticated UI in easily. It’s populate the DOM elements in the nested and repeating manner with the help of for-each, if, with, and other control flow bindings and third party template engine.
1. **Automatic UI (DOM) Refresh** – The KnockoutJs automatically refresh the UI (DOM) you’re your ViewModel update. If any changes occurred in the ViewModel data automatically refresh on view/UI/DOM.
1. **Pure JavaScript library** – The KnockoutJs works with any client-side or server technology and it is easily works with existing web application without any major changes.
1. **Compact Size** – The KnockoutJs size is around 13kb. It is too small and convenient to use.
1. **Support All Modern Browsers** – The KnockoutJs support most of the modern browsers like -IE 6+, Firefox 2+, Chrome, Safari, others.

#### Q. Why is KnockoutJS useful?

Knockout can dramatically reduce the amount of code needed to synchronize a data model and user interface controls. It is fast, cross browser compatible, and not reliant on any other libraries. It is lightweight (< 20kb after compression) and can be easily integrated with most web applications without any major architectural update.

#### Q. How do you activate a Knockout Model ?

To activate a model, we call the key method <code>ko.applyBindings</code>, passing in the name of the model to bind to as a parameter. <code>ko.applyBindings(MyNewKOModel)</code>.

#### Q. What Is observable in Knockout JS?

The Observable is a KnockoutJs property that contains the view model and this property is bind with UI (View) in two way binding.

#### Q. What Is computed observable?

The Computed observable is a KnockoutJs function which is depends on the other observable properties. Computed function are automatically update when any changes on these dependencies.

#### Q. Describe a Knockout ViewModel

A Knockout ViewModel looks very much like a basic class that is created in JavaScript as a function. It is declared as a variable, and can have members and methods.

#### Q. What is two way data binding?

Knockout uses the <code>data-*</code> tags to create a live dynamic link between a browser UI control, and a member or method inside a data ViewModel. If you have a data model with a field <code>FirstName</code> and an edit box linked using the data-bind attribute to <code>FirstName</code>, then anytime the data model changes (for example programmatically), that change immediately shows in the edit box, and any time a user makes a change to the FirstName in the edit box, the underlying data in the field <code>FirstName</code> is changed.

#### Q. How do you call a Knockout method using data bind concept?

Knockout allows us to use the data-bind concept to hook into user control object events such as <code>click</code>. To do this, we use a <code>data-bind</code> with the method we want to call as the click parameter <code>data-bind=click: callSomeMethod</code>.

#### Q. What is a use of templates in Knockout and how are they coded ?

Knockout allows us to use the data-bind concept to hook into user control object events such as <code>click</code>. To do this, Templates can provide different blocks of mark-up to be used for different view renderings. For example, to show mark-up with a required <code>State</code> field for a US address, and a required <code>Town</code> field for say a UK address. Mark-up for templates can be implemented using an external template view-engine, or by implementing the html inside a pseudo JavaScript block.

#### Q. What types of data binding are available in knockout JS?

There are different types of data bindings and its looks like-

1. visible binding
1. text binding
1. value binding
1. css binding
1. style binding
1. attr binding
1. template binding

#### Q. How do you search or sort an observable array ?

You can search and sort using a <code>ko.Computed</code> function. The computed function could implement an <code>arrayFilter</code> call from the Knockout utils library to search, and a relevant compare (on string, number, date) for the sort. In all cases, the computed function filters out what it doesn’t want and returns data accordingly.

#### Q. How do you prepare a Knockout object for data transfer ?

Data can be serialised to JSON using <code>ko.toJSON(viewModel)</code>, and to a simple JavaScript object using ko.toJS(viewModel).

#### Q. What is the purpose of the mapping plugin ?

When loading data into a viewModel, if it is complex with nested arrays, it can be troublesome to unwrap all members manually. The mapping plugin assists with this and allows you to tell Knockout how to handle complex data like structures with nested arrays by providing pattern functions.

#### Q. What is a binding, what are the binding types, and what are they used for?

A binding is a html mark-up attribute that is added to an html element to create a link between the html control element and a knockout object. It takes the format <code>data-bind:<binding-type:value></code>. There are binding types to assist with objects like control text, visibility and CSS styles, and other types to assist with form fields such as value, submit, event, etc. Bindings might be used to display the title label of a page, the visibility of a checkbox, and control the data entry in form field.

#### Q. How To Creating Custom bindings in knockoutJs?

When we create custom binding, we need to add a property with your custom binding name and assign an object with two callback functions.
Registering your binding – To register a binding, adds it as a sub property of <code>ko.bindingHandlers</code> and its looks like.

```
ko.bindingHandlers.myCustomBinding = {

  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

      // Set up any your initial state, event handlers, and so on

  },

  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

      // Update the DOM element based on the supplied values.

  }

};

DOM elements –

<div data–bind=“myCustomBinding : yourValue”> </div>

```

#### Q. How can you control flow with bindings ?

When you have an array of items in a Knockout viewModel, you can tell your mark-up to iterate through them using the data-bind <code>for-each</code> for example.

#### Q. Give a benefit of using Knockout form binding

Normal functionality we might implement around form fields such as getting/setting the field value, hooking events, etc. can be carried out using <code>form data-bind</code>. A benefit of doing this is that we allow control of the form to be tied to the data model and its rules.

#### Q. How do you delete an item from a Knockout array ?

Use the remove or removeAll methods, passing in the item you want to match for deletion.

#### Q. How would you flag an item deleted and why is this useful ?

In cases where you want to manage an array of existing data for example browser-side, and inform the server of both additions, changes and deletions, you can flag an array item using the <code>destroy</code> or <code>destroyAll</code> method. This creates a dirty record that is flagged <code>_destroy</code> and can be easily identified server-side for handling in the data repository.

#### Q. Name two context properties in Knockout and explain their use

When working with arrays, the $index property returns the index of the current context item in the array. When working with nested objects, the $parent property allows us to examine the parent of an object, for example a customer may have many orders, an order may have many line items. The order is the parent of the line item, the customer is the parent of the order.
