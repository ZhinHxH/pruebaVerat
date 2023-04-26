@isTest
private class gameTestClass {
    @isTest
    static void testGame() {
        game mygame = new game();
        Integer dado = mygame.lzdado();
        Assert.isTrue(dado>=1 && dado<=6);
    }
}