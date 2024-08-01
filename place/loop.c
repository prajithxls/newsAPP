#include <stdio.h>
int main(){
    int i,j,count="A";
    for(i='A';i<='E';i++){
        for(j='A';j<=i;j++){
            printf("%c",count);
            ++count;
        }
        printf("\n");
    }
    return 0;
}
