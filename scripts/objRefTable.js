const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Sin,
		C3.Behaviors.destroy,
		C3.Plugins.Particles,
		C3.Plugins.Touch,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Fade,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Behaviors.Fade.Cnds.OnFadeInEnd,
		C3.Plugins.System.Cnds.OnLoadComplete
	];
};
self.C3_JsPropNameTable = [
	{BACKGROUND: 0},
	{SNOWM: 0},
	{anitree: 0},
	{TREE: 0},
	{Bullet: 0},
	{Sine: 0},
	{DestroyOutsideLayout: 0},
	{SNOW1: 0},
	{SNOWSPAWN: 0},
	{SN: 0},
	{DEC0: 0},
	{DEC20: 0},
	{Stop: 0},
	{Particles: 0},
	{beingdragged: 0},
	{button1: 0},
	{Touch: 0},
	{dragstate: 0},
	{DragDrop: 0},
	{blueheart: 0},
	{box2: 0},
	{ukdragged: 0},
	{uk1: 0},
	{box3: 0},
	{yellowdragged: 0},
	{yellowh: 0},
	{box4: 0},
	{ukkdragged: 0},
	{uk22: 0},
	{box5: 0},
	{Iheartdragged: 0},
	{lheart: 0},
	{lands: 0},
	{grain: 0},
	{gr1: 0},
	{sgad: 0},
	{t2: 0},
	{for1: 0},
	{NI: 0},
	{star: 0},
	{scenetwo: 0},
	{gifts: 0},
	{carp: 0},
	{Fade: 0},
	{main: 0},
	{mainstartb: 0},
	{TEXT: 0},
	{GLOW: 0},
	{GLO1: 0},
	{GLO2: 0},
	{GLO3: 0},
	{GLO4: 0},
	{GLO5: 0},
	{scene: 0},
	{RESTART: 0},
	{screens: 0},
	{Browser: 0},
	{Audio: 0},
	{dragtail: 0},
	{firework: 0},
	{firework2: 0},
	{firework3: 0},
	{BACKBL: 0},
	{URT: 0},
	{LOGUK: 0},
	{WISHING: 0},
	{COSY: 0},
	{COS1: 0},
	{DEDI: 0},
	{YE4: 0},
	{mus1: 0},
	{off1: 0},
	{NEXT: 0},
	{NXT: 0},
	{Y: 0},
	{Loading: 0},
	{homeb: 0},
	{Fade2: 0},
	{taptreetext: 0},
	{pointer: 0},
	{isdragging: 0},
	{MUSICSTATE: 0}
];

self.InstanceType = {
	BACKGROUND: class extends self.ITiledBackgroundInstance {},
	SNOWM: class extends self.ISpriteInstance {},
	TREE: class extends self.ISpriteInstance {},
	SNOW1: class extends self.ISpriteInstance {},
	SNOWSPAWN: class extends self.ISpriteInstance {},
	SN: class extends self.IParticlesInstance {},
	DEC0: class extends self.ISpriteInstance {},
	DEC20: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	button1: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	blueheart: class extends self.ISpriteInstance {},
	box2: class extends self.ISpriteInstance {},
	uk1: class extends self.ISpriteInstance {},
	box3: class extends self.ISpriteInstance {},
	yellowh: class extends self.ISpriteInstance {},
	box4: class extends self.ISpriteInstance {},
	uk22: class extends self.ISpriteInstance {},
	box5: class extends self.ISpriteInstance {},
	lheart: class extends self.ISpriteInstance {},
	lands: class extends self.ISpriteInstance {},
	grain: class extends self.ISpriteInstance {},
	gr1: class extends self.ISpriteInstance {},
	sgad: class extends self.ISpriteInstance {},
	t2: class extends self.ISpriteInstance {},
	for1: class extends self.ISpriteInstance {},
	NI: class extends self.ISpriteInstance {},
	star: class extends self.ISpriteInstance {},
	scenetwo: class extends self.ISpriteInstance {},
	gifts: class extends self.ISpriteInstance {},
	carp: class extends self.ISpriteInstance {},
	main: class extends self.ISpriteInstance {},
	mainstartb: class extends self.ISpriteInstance {},
	TEXT: class extends self.ISpriteInstance {},
	GLOW: class extends self.ISpriteInstance {},
	GLO1: class extends self.ISpriteInstance {},
	GLO2: class extends self.ISpriteInstance {},
	GLO3: class extends self.ISpriteInstance {},
	GLO4: class extends self.ISpriteInstance {},
	GLO5: class extends self.ISpriteInstance {},
	scene: class extends self.ISpriteInstance {},
	RESTART: class extends self.ISpriteInstance {},
	screens: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	dragtail: class extends self.IParticlesInstance {},
	firework: class extends self.IParticlesInstance {},
	firework2: class extends self.IParticlesInstance {},
	firework3: class extends self.IParticlesInstance {},
	BACKBL: class extends self.ISpriteInstance {},
	URT: class extends self.ISpriteInstance {},
	LOGUK: class extends self.ISpriteInstance {},
	WISHING: class extends self.ISpriteInstance {},
	COSY: class extends self.ISpriteInstance {},
	COS1: class extends self.ISpriteInstance {},
	DEDI: class extends self.ISpriteInstance {},
	YE4: class extends self.ISpriteInstance {},
	mus1: class extends self.ISpriteInstance {},
	off1: class extends self.ISpriteInstance {},
	NEXT: class extends self.ISpriteInstance {},
	NXT: class extends self.ISpriteInstance {},
	Y: class extends self.ISpriteInstance {},
	Loading: class extends self.ISpriteInstance {},
	homeb: class extends self.ISpriteInstance {},
	taptreetext: class extends self.ISpriteInstance {},
	pointer: class extends self.ISpriteInstance {}
}