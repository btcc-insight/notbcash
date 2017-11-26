
newbuild:
	cp -R ../minenotbcash/build/* .
	cp index.html ./miner-stats/.

push:
	cp -R ../minenotbcash/build/* .
	cp index.html ./miner-stats/.
	git add . -A
	git commit -am "new build"
	git push origin master
