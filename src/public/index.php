<!DOCTYPE html>
<html>
<head>
	<title>Parker Number-Word Sequencer - Davecheesefish.com</title>
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/lib/jquery.js"></script>
	<script type="text/javascript" src="/js/lib/numerousness.min.js"></script>
	<script type="text/javascript" src="/js/sequencer.js"></script>
</head>
<body>
	<header id="site-header">
		<h1>The Parker Number-Word Sequencer (beta)</h1>
	</header>
	<article id="site-content">
		<form id="input-form">
			<p>Sequence numbers <input id="subject-start" type="number" min="0" value="0" step="1"> to <input id="subject-end" type="number" min="0" max="1000000000000000" value="100" step="1"> <input type="submit"></p></p>
			<p><label><input id="include-and" type="checkbox" checked="1">Include "and" after hundreds</label> <label><input id="include-punctuation" type="checkbox">Include spaces and punctuation</label> <label><input id="individual-digits" type="checkbox">Spell out individual digits</label></p>
			<p>Recommended range no more than 10000. To calculate the sequence for one specific number, enter the same number in both inputs.</p>
		</form>
		<section id="results"></section>
	</article>
	<footer id="site-footer">
		<p>&copy;2016 <a href="http://davecheesefish.com">David Prior</a>. Inspired by <a href="https://youtu.be/LYKn0yUTIU4" target="_blank">a video by Matt Parker</a>. See the <a href="https://github.com/davecheesefish/Parker-Number-Word-Sequencer">source code and similar projects</a>.</p>
	</footer>
</body>
</html>