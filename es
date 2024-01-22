import java.util.Scanner;
import java.util.Random;
import java.util.HashSet;
import java.util.*;
public class NonDuplicati {
public static void main(String[] args) {
Scanner tastiera = new Scanner(System.in);
int opzioni, quantiNumeri = 0, posizione = 0;
boolean fine = true;
int[] vetNumeri = null;
int[] vetPari = null;
do {
ClrScr();
menu();
System.out.println("seleziona un'opzione");
opzioni = tastiera.nextInt();
switch (opzioni) {
case 1:
System.out.println(" quanti numeri vuoi
generare?");
quantiNumeri = tastiera.nextInt();
vetNumeri = numeriCasuali(quantiNumeri);
break;
case 2:
System.out.println("visualizza numeri");
if (vetNumeri != null)
visualizza(vetNumeri);
else
System.out.println("non è stato creato il
vettore");
break;
case 3:
System.out.println(" numeri pari");
if (vetNumeri != null) {
vetPari = filtraPari(vetNumeri);
} else
System.out.println("non è stato creato il
vettore");
break;
case 4:
if (vetPari != null)
visualizza(vetPari);
else
System.out.println("non è stato creato il
vettore");
break;
case 5:
System.out.println(" exit");
fine = false;
break;
default:
System.out.println("opzione errata");
}
Wait(2000);
} while (fine);
}
private static void menu() {
System.out.println("== app numeri casuali");
System.out.println("[1] genera numeri");
System.out.println("[2] visualizza numeri");
System.out.println("[3] numeri pari");
System.out.println("[4] visualizza pari");
System.out.println("[5] exit");
}
private static void ClrScr() {
try {
new ProcessBuilder("cmd", "/c",
"cls").inheritIO().start().waitFor();
} catch (Exception e) {
e.printStackTrace();
}
}
private static void Wait(int tempo) {
try {
Thread.sleep(tempo);
} catch (InterruptedException e) {
e.printStackTrace();
}
}
private static int[] numeriCasuali(int n) {
int casuale;
Set<Integer> numeriUnici = new HashSet<>();
Random rn = new Random();
while (numeriUnici.size() < n) {
casuale = rn.nextInt(101);
numeriUnici.add(casuale);
}
return
numeriUnici.stream().mapToInt(Integer::intValue).toArray();
}
private static int[] filtraPari(int[] numeri) {
return Arrays.stream(numeri).filter(num -> num % 2 ==
0).toArray();
}
private static void visualizza(int[] v) {
for (int i = 0; i < v.length; i++) {
System.out.println(i + "=" + v[i]);
}
}
}
