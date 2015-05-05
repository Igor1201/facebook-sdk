window.fbAsyncInit = ->
	unless Meteor.settings.public.facebook.appId
		console.warn('Can\'t find Facebook appId')
		return

	FB.init
		appId: Meteor.settings.public.facebook.appId
		status: true
		xfbml: true
		version: 'v2.3'

Template.onRendered ->
	try
		FB.XFBML.parse()
	catch e
