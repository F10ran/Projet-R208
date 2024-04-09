<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Drag & Drop</title>
	<link rel="stylesheet" href="Style.css">

	<script>
		function allowDrop(ev) {
		 ev.preventDefault();
		}
		
		
		function drag(ev) {
		 ev.dataTransfer.setData("text", ev.target.id);
		}
		
		
		function drop(ev) {
		 ev.preventDefault();
		 var data = ev.dataTransfer.getData("text");
		 ev.target.appendChild(document.getElementById(data));
		}
		</script>

</head>
<body>
	<header>
		<h1>Drag & Drop<br /><span>Relaxation R 2.08</span></h1>
	</header>
	  
	<section class="main-container">
		<ul class="columns">
	  
		  	<li class="column to-do-column">
				<div class="column-header">
		  			<h4 style="background: #ffacde;">Mise en relaxation</h4>
				</div>
				<ul class="task-list" id="to-do" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
					<li class="task" id="drag1" draggable="true" ondragstart="drag(event)">
						<p>Introduction 1</p>
					</li>
					<li class="task" id="drag2" draggable="true" ondragstart="drag(event)">
						<p>Introduction 2</p>
		  			</li>
					<li class="task" id="drag3" draggable="true" ondragstart="drag(event)">
						<p>Introduction 3</p>
					</li>
					<li class="task" id="drag4" draggable="true" ondragstart="drag(event)">
						<p>Introduction 4</p>
					</li>
				</ul>
		  	</li>
	  
		  	<li class="column doing-column">
				<div class="column-header">
			  		<h4 style="background: #fe6ee6;">La relaxation</h4>
				</div>
				<ul class="task-list" id="doing" id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
			  		<li class="task" id="drag5" draggable="true" ondragstart="drag(event)">
						<p>Relaxation 1</p>
			  		</li>
			  		<li class="task" id="drag6" draggable="true" ondragstart="drag(event)">
						<p>Relaxation 2</p>
			  		</li>
			  		<li class="task" id="drag7" draggable="true" ondragstart="drag(event)">
						<p>Relaxation 3</p>
			  		</li>
				</ul>
		  	</li>
	  
		  	<li class="column done-column">
				<div class="column-header">
			  		<h4 style="background: #f254ae;">Sortie de la relaxation</h4>
				</div>
				<ul class="task-list" id="done" id="div3" ondrop="drop(event)" ondragover="allowDrop(event)">
			  		<li class="task" id="drag8" draggable="true" ondragstart="drag(event)">
						<p>Sortie 1</p>
			  		</li>
			  		<li class="task" id="drag" draggable="true" ondragstart="drag(event)">
						<p>Sortie 2</p>
			  		</li>
				</ul>
		  	</li>
	  
		  	<li class="column trash-column">
				<div class="column-header">
			  		<h4 style="background: #ff4444;">Ressources</h4>
				</div>
				<ul class="task-list" id="trash" id="div4" ondrop="drop(event)" ondragover="allowDrop(event)">
			  		<li class="task" id="drag10" draggable="true" ondragstart="drag(event)">
						<p>Sortie 3</p>
			  		</li>
			  		<li class="task" id="drag11" draggable="true" ondragstart="drag(event)">
						<p>Sortie 4</p>
			  		</li>
					<li class="task" id="drag12" draggable="true" ondragstart="drag(event)">
						<p>Relaxation 4</p>
					</li>
	  			</ul>

		  	</li>
		</ul>
	</section>

	<footer>
		<button id="Valid">Valider</button>
	</footer>

	<script src="Script.js">
		
	</script>
</body>
</html>
