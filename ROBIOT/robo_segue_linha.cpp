#include <Arduino.h>

//MOTOR 1  
int motor1H = 2; 
int motor1L = 3; 

//MOTOR 2
int motor2H = 12; 
int motor2L = 13; 


int reflexD = 6;
int reflexE = 7;

int tmp = 50;
   
void setup()  
{  

  pinMode(motor1H, OUTPUT);  
  pinMode(motor1L, OUTPUT);
  pinMode(motor2H, OUTPUT);
  pinMode(motor2L, OUTPUT);
  pinMode(reflexD, INPUT);
  pinMode(reflexE, INPUT);
}  
   
void loop()  
{
  if (digitalRead(reflexD)==LOW && digitalRead(reflexE)==LOW)
  {
  	frente();
  }
 
  if (digitalRead(reflexD)==HIGH && digitalRead(reflexE)==LOW)
  {
  direita();
 
  }
 
  if (digitalRead(reflexD)==LOW && digitalRead(reflexE)==HIGH)
  {
  esquerda();
 
  }
 
 
  pare();
}  
   
void pare()  
{  
  digitalWrite(motor1H, LOW);  
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, LOW);  
  digitalWrite(motor2L, LOW);
  delay(tmp);  
}  

void frente()
{
  digitalWrite(motor1H, HIGH);  
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, HIGH);  
  digitalWrite(motor2L, LOW);
  delay(tmp);  
}


void re()
{
  digitalWrite(motor1H, LOW);  
  digitalWrite(motor1L, HIGH);
  digitalWrite(motor2H, LOW);  
  digitalWrite(motor2L, HIGH);  
  delay(tmp);
}


void esquerda()
{
  digitalWrite(motor1H, HIGH);  
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, LOW);  
  digitalWrite(motor2L, LOW);  
  delay(tmp);
}

void direita()
{
  digitalWrite(motor1H, LOW);  
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, HIGH);  
  digitalWrite(motor2L, LOW);  
  delay(tmp);
}